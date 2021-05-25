import { instance } from '../../http-common';
import router from '../../router'

export default {
    state: {
        answers: [],
        selectRadio: null,
    },
    getters: {
        answers: state => state.answers,
        selectRadio: state => state.selectRadio,
    },
    mutations: {
        setAnswers: (store, data) => {
            if (data == 'clear') {
                store.answers = []
            } else {
                let indexFind = null
                let find = store.answers.filter((elem, index) => {
                    if (elem.QuestionId == data.QuestionId) {
                        indexFind = index
                        return elem;
                    }
                })[0]

                if (find == undefined) {
                    store.answers.push(data)
                } else {
                    store.answers[indexFind] = data
                }
            }
        },
        setRadio: (store, data) => {
            store.selectRadio = data
        },
        clearAnswers: (store) => {
            store.answers = []
        },
        clearSelectRadio: (store) => {
            store.selectRadio = null
        },
    },
    actions: {
        send({ commit }) {
            console.log(this.state.answers.answers);
            instance({
                method: 'POST',
                url: '/answers',
                data: this.state.answers.answers,
                dataType: "json",
            })
                .then(function (response) {
                    console.log(response.data);
                    commit('setRadio', null)
                    commit('setAnswers', 'clear')
                    router.push('/polls')
                })
       

        },
    },
    namespaced: true
};
