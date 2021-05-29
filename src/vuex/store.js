import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        interests: [],
    },
    mutations: {
        SET_INTEREST_LIST_TO_STATE: (state, interests) => {
            state.interests = interests;
        },
    },
    actions: {
        GET_INTEREST_LIST_FROM_API({commit}) {
            const config = {
                headers: {
                    'Authorization': `Token ${localStorage.getItem('user-token')}`,
                },
            }
            const body = {}
            return axios.get('/api/v1/interest/all/', config)
                    .then((interests) => {commit('SET_INTEREST_LIST_TO_STATE', interests.data) })
                    .catch(err => alert("Invalid permission"))
        },
    },
    getters: {
        INTEREST_LIST(state) {
            return state.interests;
        }
    },
});

export default store;