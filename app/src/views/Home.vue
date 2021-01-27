<template>
  <div>
    <v-dialog
            v-model="dialogApprove"
            persistent
            max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Warning
        </v-card-title>
        <v-card-text>You haven't worked for 9 hours. Are you sure want to clock out?</v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
                :color="color.blubluedark1"
                text
                @click="dialogApprove = false"
          >
            No
          </v-btn>
          <v-btn
                :color="color.blubluedark1"
                text
                @click="onWarning"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="wave-container">
      <v-row no-gutters>
        <v-col class="col-4 text-align-right">
          <v-avatar
            :color="currentUser !== null && currentUser.roles !== undefined ? config.roleColor[currentUser.roles[0]] : color.blubluedark1"
            size="80"
          >
            <span class="white--text headline">{{ initials }}</span>
          </v-avatar>
        </v-col>
        <v-col class="col-1"/>
        <v-col class="col-7 avatar-info text-align-left">
          <v-row v-if="Object.keys(currentUser).length !== 0" no-gutters>
            <v-col cols="12"><span class="bold large">{{ currentUser.name }}</span></v-col>
            <v-col cols="12" class="margin"><span>{{ currentUser.department }} - {{ currentUser.office.name }}</span></v-col>
            <v-col cols="12"><span>{{ currentUser.leave.remaining }} Leave(s) left</span></v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path :fill="color.blublue" fill-opacity="1"
            d="M0,192L80,170.7C160,149,320,107,480,128C640,149,800,235,960,261.3C1120,288,1280,256,1360,240L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/>
    </svg>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >

        <v-card>
          <v-card-title class="headline lighten-2 dark">
            Clock <span v-if="hasClockedIn === 0 && !employeeClockedIn">In</span> <span v-if="hasClockedIn === 1 || employeeClockedIn">Out</span>
          </v-card-title>

          <v-card-text>
            <v-form>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <div v-if="hasClockedIn === 0 && !employeeClockedIn">
                      <span class="dark bold">Selfie</span>
                      <v-file-input
                        label="File input"
                        filled
                        prepend-icon="mdi-camera"
                        accept="image/*"
                        :rules="imageRules"
                        @change="onImageChange"
                        capture="camera"
                      />
                      <v-img :src="imageUrl"/>
                    </div>
                    <div v-else>
                      <span class="dark bold">Clock in</span>
                      <v-row class="padding-bot" no-gutters>
                        <v-col class="col-12">
                          <v-icon :color="color.blubluedark1" size="20">mdi-calendar</v-icon>
                          <span class="bold dark margin-left">{{ unixToShortDay(dashboardSummary.attendance.current.date.start) }}, {{ unixToString(dashboardSummary.attendance.current.date.start) }}</span>
                        </v-col>
                        <v-col class="col-12">
                          <v-icon :color="color.blubluedark1" size="20">mdi-clock-outline</v-icon>
                          <span class="dark margin-left">
                            {{ unixToTime(dashboardSummary.attendance.current.date.start) }}
                          </span>
                        </v-col>
                        <v-col class="col-12">
                          <span class="dark margin-left">
                            You have worked for <strong>{{ hourTime(dashboardSummary.attendance.current.date.start) }} hour(s)</strong> and <strong>{{ minuteTime(dashboardSummary.attendance.current.date.start) }} minute(s)</strong>.
                          </span>
                        </v-col>
                      </v-row>
                    </div>
                    <span class="dark bold">Location</span>
                    <v-col class="map">
                      <Map @locationFound="onLocationFound" />
                    </v-col>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>

          <v-divider/>

          <v-card-actions>
            <v-spacer/>
            <v-btn
              v-if="hasClockedIn === 0 && !employeeClockedIn"
              color="primary"
              text
              @click="onClockInSubmit"
            >
              Clock in
            </v-btn>
            <v-btn
              v-else
              color="primary"
              text
              @click="onClockOutSubmit"
            >
              Clock out
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-col class="col-12 center">
      <div class="clock">
        <v-row class="clock-info" no-gutters>
          <v-col class="col-3 text-align-right"><v-icon :color="color.blubluedark1" size="45">mdi-clock-outline</v-icon></v-col>
          <v-col class="col-9 text-align-left clock-detail">
            <v-row no-gutters>
              <v-col class="col-12"><span class="bold">{{ today }}</span></v-col>
              <v-col v-if="dashboardSummary !== null" class="col-12 margin"><span class="small text-capitalize">{{ dashboardSummary.calendar.status }}</span></v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 center margin-bot">
            <v-btn
              v-if="hasClockedIn === 0 && !employeeClockedIn"
              depressed
              :color="color.blubluedark1"
              dark
              @click="dialog = true"
            >
              Clock in
            </v-btn>
            <v-btn
              v-else
              depressed
              class="white--text"
              :color="color.blubluedark1"
              @click="dialog = true"
              :disabled="!hasAttend"
            >
              Clock out
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-row v-if="announcements !== null && announcements.length > 0" class="margin-bot" no-gutters>
      <v-col class="col-6 bold dark">
        <span class="padding-left">Announcement</span>
      </v-col>
      <v-col class="col-6 bold dark small text-align-right">
        <router-link to="/announcements" class="text-decoration-none"><span class="padding-right dark">Show All</span></router-link>
      </v-col>
      <div class="horizontal-scroll">
        <v-card v-bind:key="announcement.id" v-for="announcement in announcements" class="horizontal-scroll-card padding background-white">
          <v-row no-gutters>
            <v-col class="col-12">
              <span class="bold medium dark">{{ announcement.title }}</span>
            </v-col>
            <v-col class="col-12 margin">
              <v-icon :color="color.blubluedark1" size="17">mdi-calendar</v-icon>
              <span class="small dark margin-left">{{ unixToString(announcement.date) }}</span>
            </v-col>
            <v-col class="col-12 margin-bot">
              <p class="dark small">{{ announcement.description }}</p>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-row>
    <v-row v-if="Object.keys(currentUser).length !== 0" class="margin-bot center" no-gutters>
      <v-col class="col-12 bold dark">
        <span v-if="currentUser.roles !== null" class="padding-left">{{ currentUser.roles.includes('ADMIN') ? 'Attendance Summary' :  'Last Attendance' }}</span>
      </v-col>
      <div class="last-attendance center">
        <v-card v-if="dashboardSummary !== null" class="padding last-attendance-card">
          <v-row v-if="dashboardSummary.attendance !== null && !currentUser.roles.includes('ADMIN') && dashboardSummary.attendance.latest.date.start !== null" no-gutters>
            <v-col class="col-12 margin">
              <v-icon :color="color.blubluedark1" size="20">mdi-calendar</v-icon>
              <span class="bold dark margin-left">{{ unixToShortDay(dashboardSummary.attendance.latest.date.start) }}, {{ unixToString(dashboardSummary.attendance.latest.date.start) }}</span>
            </v-col>
            <v-col class="col-12">
              <v-icon :color="color.blubluedark1" size="20">mdi-clock-outline</v-icon>
              <span class="dark margin-left">
                {{ unixToTime(dashboardSummary.attendance.latest.date.start) }} <span v-if="dashboardSummary.attendance.latest.date.end !== null">- {{ unixToTime(dashboardSummary.attendance.latest.date.end) }} </span>
              </span>
            </v-col>
            <v-col class="col-12">
              <v-icon :color="color.blubluedark1" size="20">mdi-map-marker-outline</v-icon>
              <span class="dark margin-left text-capitalize">{{ dashboardSummary.attendance.latest.location.type.toLowerCase() }} Office</span>
            </v-col>
          </v-row>
          <v-row v-else-if="dashboardSummary.report !== null" no-gutters>
            <v-col class="col-12 margin">
              <v-icon :color="color.blubluedark1" size="20">mdi-calendar</v-icon>
              <span class="bold dark margin-left">{{ dashboardSummary.report.absent }} absent(s)</span>
            </v-col>
            <v-col class="col-12">
              <v-icon :color="color.blubluedark1" size="20">mdi-clock-outline</v-icon>
              <span class="dark margin-left">
                  {{ dashboardSummary.report.working }} working
                </span>
            </v-col>
          </v-row>
          <v-row v-else no-gutters>
            <span class="dark">No Data</span>
          </v-row>
        </v-card>
      </div>
    </v-row>
  </div>
</template>

<script src="./js/home.js"></script>

<style lang="scss" scoped>

  .last-attendance {
    width: 90%;
  }

  .last-attendance-card {
    margin-top: 10px;
    border-radius: 13px !important;
    width: 100%;
  }

  .horizontal-scroll {
    padding: 3px 15px 0 15px;
    display: flex;
    overflow-x: auto;
    overflow-y: visible;
    height: 140px;
    min-width: 100%;
    -ms-overflow-style: none;
  }

  .horizontal-scroll::-webkit-scrollbar {
    display: none;
  }

  .horizontal-scroll-card {
    border-radius: 13px !important;
    background-color: black;
    margin-left: 8px;
    height: 95%;
    min-width: 300px;
  }

  .map {
    height: 250px;
  }

  .background-white {
    background-color: white;
  }

  .clock {
    width: 85%;
    z-index: 100;
    background-color: white;
    margin-top: -130px;
    height: 140px;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.19);
  }

  .wave-container {
    position: relative;
    padding-top: 30px;
    background: $blu-blue;
    color: #FFF;
    text-align: center;
    height: 170px;
  }

  .clock-detail {
    padding-left: 10px !important;
  }

  .clock-info {
    color: $blu-blue-dark-1;
    margin-top: 20px;
  }

  .avatar-info {
    font-size: 15px;
  }

  .margin {
    margin-top: -5px;
  }

  @keyframes animateWave {
    0% {
      transform: scale(1,0);
    }
    100% {
      transform: scale(1,1);
    }
  }

  svg {
    margin-top: -5px;
    display: block;
    transform-origin: top;
    animation: animateWave 2000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
  }

</style>
