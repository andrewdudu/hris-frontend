import { mapActions, mapGetters } from "vuex";
import color from "@/assets/js/color.js";
import nameToInitials from "@/utils/name-to-initials";
import timestamp from "@/utils/timestamp";
import moment from 'moment';
import Map from '@/components/Map.vue';

export default {
  name: "Home",
  components: {
    Map
  },
  data() {
    return {
      color,
      hasClockedIn: 0,
      location,
      dialog: false,
      loading: false,
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
    ...mapActions('user', [
        'fetchCurrentUser'
    ]),
    ...mapActions('dashboard', [
      'fetchDashboardSummary'
    ]),
    ...mapActions('announcement', [
      'fetchAnnouncements'
    ]),
    ...mapActions('attendance', [
        'postClockIn',
        'postClockOut'
    ]),
    onImageChange(file) {
      let reader = new FileReader();
      this.image = null;
      this.url = null;
      if (file !== undefined) {
        reader.readAsDataURL(file);
        this.imageSize = file.size;
        this.imageUrl = URL.createObjectURL(file);
        reader.onload = () => {
          this.image = reader.result.substr(reader.result.indexOf(",") + 1);
        };
      }
    },
    onLocationFound(coordinates) {
      if (coordinates !== null) {
        this.location = {
          lat: coordinates[0],
          lon: coordinates[1]
        };
      } else {
        // TODO: Handle if GPS not function correctly
      }
    },
    onClockInSubmit() {
      this.dialog = false;
      this.postClockIn({
        image: this.image,
        location: this.location
      })
          .then(res => this.onClockInSuccess(res))
          .catch(err => this.onClockInFail(err));
    },
    onClockOutSubmit() {
      this.dialog = false;
      this.postClockOut({
        location: this.location
      })
          .then(res => this.onClockOutSuccess(res))
          .catch(err => this.onClockOutFail(err));
    },
    onClockOutSuccess() {},
    onClockOutFail() {},
    onClockInSuccess() {
      this.hasClockedIn = 1;
    },
    onClockInFail() {},
    hourTime(time) {
      const calculatedTime = moment.duration(moment().diff(moment.unix(time)));
      return Math.floor(calculatedTime.asHours());
    },
    minuteTime(time) {
      const calculatedTime = moment.duration(moment().diff(moment.unix(time)));
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
    }
  },
  computed: {
    ...mapGetters('announcement', ['announcements']),
    ...mapGetters('dashboard', ['dashboardSummary']),
    ...mapGetters('user', ['currentUser']),
    initials() {
      if (this.currentUser !== null) {
        return nameToInitials(this.currentUser.name);
      }
      return "G";
    }
  },
  created() {
    this.fetchCurrentUser();
    this.fetchDashboardSummary();
    this.fetchAnnouncements();
  }
};
