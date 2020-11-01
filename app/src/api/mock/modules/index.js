import user from '../../user';
import dashboard from '../../dashboard';
import announcement from "../../announcement";
import attendance from "../../attendance";

export default {
    ...user,
    ...dashboard,
    ...announcement,
    ...attendance
}
