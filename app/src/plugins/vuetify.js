import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import color from '@/assets/js/color';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				success: color.success,
				error: color.error
			}
		}
	}
});
