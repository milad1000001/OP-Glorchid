import axios from 'axios';

export default {
    getList() {
        return axios
            .get('http://OP-F4L-MIT05:85/api/SalesTrackingPlanning/GetPlannedDrugs')
            .then(({ data }) => {
                return data;
            });
    },
    activeDrug(drugID) {
        return axios.post(
            'http://OP-F4L-MIT05:85/api/SalesTrackingPlanning/ActivateDrugTracking', {
                DrugId: drugID,
            }
        );
    },
    deactiveDrug(drugID) {
        return axios.post(
            'http://OP-F4L-MIT05:85/api/SalesTrackingPlanning/DeactivateDrugTracking', {
                DrugId: drugID,
            }
        );
    },
};