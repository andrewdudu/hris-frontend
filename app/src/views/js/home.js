import { mapActions, mapGetters } from "vuex";
import color from "@/assets/js/color.js";
import config from "@/config";
import nameToInitials from "@/utils/name-to-initials";
import timestamp from "@/utils/timestamp";
import moment from 'moment';
import Compress from 'compress.js';
const Map = () => import(/* webpackChunkName:'c-map' */'@/components/Map.vue');

export default {
  name: "Home",
  components: {
    Map
  },
  data() {
    return {
      color,
      config,
      dialogApprove: false,
      isMock: process.env.VUE_APP_ENVIRONMENT !== 'prod' && process.env.VUE_APP_IS_MOCK === 'true',
      hasClockedIn: 0,
      hasClockedOut: 0,
      location,
      dialog: false,
      loading: false,
      fileExtension: '',
      image: null,
      imageUrl: null,
      imageSize: 0,
      imageRules: [
        (v) => !!v || "Selfie is required",
        () => this.imageSize < 2097152,
      ],
      today: moment().format('dddd, DD MMMM YYYY')
    };
  },
  methods: {
    ...mapActions('user', ['fetchCurrentUser']),
    ...mapActions('dashboard', ['fetchDashboardSummary']),
    ...mapActions('announcement', ['fetchAnnouncements']),
    ...mapActions('attendance', ['postClockIn', 'postClockOut']),
    ...mapActions('component', ['openSnackbar']),
    onImageChange(file) {
      this.image = null;
      this.url = null;
      const files = [file];
      const compress = new Compress();
      compress.compress(files, {
        size: 4, // the max size in MB, defaults to 2MB
        quality: 0.75, // the quality of the image, max is 1,
        maxWidth: 1920, // the max width of the output image, defaults to 1920px
        maxHeight: 1920, // the max height of the output image, defaults to 1920px
        resize: true // defaults to true, set false if you do not want to resize the image width and height
      }).then((data) => {
        this.image = data[0].data;
      });
      this.imageUrl = URL.createObjectURL(file);
    },
    onLocationFound(coordinates) {
      if (!coordinates) {
        // TODO: if GPS Notfound
        return;
      }
      this.location = {
        lat: coordinates[0],
        lon: coordinates[1]
      }
    },
    onClockInSubmit() {
      this.dialog = false;
      this.postClockIn({
        image: `${this.fileExtension};${this.image}`,
        location: this.location
      })
          .then(this.onClockInSuccess)
          .catch(this.onClockInFail);
    },
    onWarning() {
      this.dialog = false;
      this.dialogApprove = false;
      this.postClockOut({
        location: this.location
      })
          .then(this.onClockOutSuccess)
          .catch(this.onClockOutFail);
    },
    onClockOutSubmit() {
      if (this.hourTime(this.dashboardSummary.attendance.current.date.start) < 9) {
        this.dialogApprove = true;
      } else {
        this.dialog = false;
        this.postClockOut({
          location: this.location
        })
            .then(this.onClockOutSuccess)
            .catch(this.onClockOutFail);
      }
    },
    onClockOutSuccess() {
      this.hasClockedOut = 1;
      this.openSnackbar({
        message: "Clocked Out.",
        color: 'success'
      });
      this.fetchDashboardSummary();
    },
    onClockOutFail(err) {
      if (err.response.data.errors.message.includes('NOT_AVAILABLE')) {
        this.openSnackbar({
          message: "You haven't worked for 9 hours",
          color: 'error'
        })
      }
    },
    onClockInSuccess() {
      this.hasClockedIn = 1;
      this.openSnackbar({
        message: "Clocked In.",
        color: 'success'
      });
      this.fetchDashboardSummary();
    },
    onClockInFail() {
      this.openSnackbar({
        message: "Something went wrong, please try again.",
        color: 'error'
      })
    },
    hourTime(time) {
      if (this.isMock) return 0;
      const calculatedTime = moment.duration(moment().diff(moment(time)));
      return Math.floor(calculatedTime.asHours());
    },
    minuteTime(time) {
      if (this.isMock) return 0;
      const calculatedTime = moment.duration(moment().diff(moment(time)));
      return Math.floor(calculatedTime.asMinutes()) % 60;
    },
    unixToShortDay(value) {
      return timestamp.unixToShortDay(value);
    },
    unixToString(value) {
      return timestamp.unixToString(value);
    },
    unixToTime(value) {
      return timestamp.unixToTime(value);
    },
  },
  computed: {
    ...mapGetters('announcement', ['announcements']),
    ...mapGetters('dashboard', ['dashboardSummary']),
    ...mapGetters('user', ['currentUser']),
    initials() {
      return nameToInitials(this.currentUser.name);
    },
    employeeClockedIn() {
      return !!(this.dashboardSummary && this.dashboardSummary.attendance.current.date.start);
    },
    hasAttend() {
      return this.dashboardSummary.attendance.current.status === 'AVAILABLE';
    }
  },
  created() {
    this.fetchCurrentUser();
    this.fetchDashboardSummary();
    this.fetchAnnouncements();
  }
};
