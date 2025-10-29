import axios from 'axios'
import appService from "../../services/appService";


export const product = {
    namespaced: true,
    state: {
        lists: [],
        page: {},
        pagination: [],
        show: {},
        getSku: [],
        temp: {
            temp_id: null,
            isEditing: false,
        },
        purchasableList:[],
        simpleList:[]
    },
    getters: {
        lists: function (state) {
            return state.lists;
        },
        pagination: function (state) {
            return state.pagination
        },
        page: function (state) {
            return state.page;
        },
        show: function (state) {
            return state.show;
        },
        getSku: function (state) {
            return state.getSku;
        },
        temp: function (state) {
            return state.temp;
        },
        purchasableList:function(state) {
            return state.purchasableList;
        },
        simpleList: function (state) {
            return state.simpleList;
        }
    },
    actions: {
        lists: function (context, payload) {
            return new Promise((resolve, reject) => {
                let url = 'admin/product';
                if (payload) {
                    url = url + appService.requestHandler(payload);
                }
                axios.get(url).then((res) => {
                    if (typeof payload.vuex === "undefined" || payload.vuex === true) {
                        context.commit('lists', res.data.data);
                        context.commit('page', res.data.meta);
                        context.commit('pagination', res.data);
                    }
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        save: function (context, payload) {
            return new Promise((resolve, reject) => {
                let method = axios.post;
                let url = '/admin/product';
                if (this.state['product'].temp.isEditing) {
                    method = axios.post;
                    url = `/admin/product/${this.state['product'].temp.temp_id}`;
                }
                method(url, payload.form).then(res => {
                    context.dispatch('lists', payload.search).then().catch();
                    context.commit('reset');
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        edit: function (context, payload) {
            context.commit('temp', payload);
        },
        destroy: function (context, payload) {
            return new Promise((resolve, reject) => {
                axios.delete(`admin/product/${payload.id}`).then((res) => {
                    context.dispatch('lists', payload.search).then().catch();
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        show: function (context, payload) {
            return new Promise((resolve, reject) => {
                axios.get(`admin/product/show/${payload}`).then((res) => {
                    context.commit('show', res.data.data);
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        changeImage: function (context, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post(
                        `/admin/product/change-image/${payload.id}`,
                        payload.form,
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        }
                    )
                    .then((res) => {
                        context.commit("show", res.data.data);
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        uploadImage: function (context, payload) {
            return new Promise((resolve, reject) => {
                axios.post(`/admin/product/upload-image/${payload.id}`, payload.form, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(res => {
                    context.commit('show', res.data.data);
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        deleteImage: function (context, payload) {
            return new Promise((resolve, reject) => {
                axios.get(`/admin/product/delete-image/${payload.id}/${payload.index}`).then(res => {
                    context.commit('show', res.data.data);
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        // async uploadNutritionImage({ commit }, { productId, file }) {
        //     commit("SET_LOADING", true);
        //     try {
        //       const formData = new FormData();
        //       formData.append("nutrition_image", file);
      
        //       const response = await fetch(`/admin/product/nutrition/upload/${productId}`, {
        //         method: "POST",
        //         body: formData,
        //       });
      
        //       if (!response.ok) {
        //         const message = await response.text();
        //         throw new Error(message);
        //       }
      
        //       const data = await response.json();
        //       return data;
        //     } catch (error) {
        //       console.error("Upload Nutrition Image Error:", error);
        //       throw error;
        //     } finally {
        //       commit("SET_LOADING", false);
        //     }
        // },
        uploadNutritionImage: function (context, payload) {
            const formData = new FormData();
            formData.append("nutrition_image", payload.file);
            return new Promise((resolve, reject) => {
                axios.post(`/admin/product/nutrition/upload/${payload.productId}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(res => {
                    context.commit('show', res.data.data);
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        deleteNutritionImage: function (context, payload) {
            return new Promise((resolve, reject) => {
                axios.get(`/admin/product/nutrition/delete/${payload.productId}`).then(res => {
                    context.commit('show', res.data.data);
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        fetchNutritionImage: function (context, payload) {
            return new Promise((resolve, reject) => {
                axios.get(`admin/product/nutrition/upload/${payload.productId}`).then((res) => {
                    // if(typeof payload.vuex === "undefined" || payload.vuex === true) {
                    //     context.commit('lists', res.data.data);
                    // }
                    console.log(res)
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        // async deleteNutritionImage({ commit }, { productId }) {
        //     commit("SET_LOADING", true);
        //     try {
        //       const response = await fetch(`/admin/product/nutrition/delete/${productId}`, {
        //         method: "DELETE",
        //       });
      
        //       if (!response.ok) {
        //         const message = await response.text();
        //         throw new Error(message);
        //       }
      
        //       const data = await response.json();
        //       return data;
        //     } catch (error) {
        //       console.error("Delete Nutrition Image Error:", error);
        //       throw error;
        //     } finally {
        //       commit("SET_LOADING", false);
        //     }
        //   },
        
        reset: function (context) {
            context.commit('reset');
        },
        export: function (context, payload) {
            return new Promise((resolve, reject) => {
                let url = 'admin/product/export';
                if (payload) {
                    url = url + appService.requestHandler(payload);
                }
                axios.get(url, { responseType: 'blob' }).then((res) => {
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            });
        },

        getSku: function (context) {
            return new Promise((resolve, reject) => {
                axios.get('admin/product/generate-sku').then((res) => {
                    context.commit('getSku', res.data.data);
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            });
        },

        shippingAndReturn: function (context, payload) {
            return new Promise((resolve, reject) => {
                axios.post(`/admin/product/shipping-and-return/${payload.id}`, payload.form).then(res => {
                    context.commit("show", res.data.data);
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        productOffer: function (context, payload) {
            return new Promise((resolve, reject) => {
                axios.post(`/admin/product/offer/${payload.id}`, payload.form).then(res => {
                    context.commit("show", res.data.data);
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        getPurchasableProduct: function(context,payload){
            return new Promise((resolve,reject) => {
                axios.get('admin/product/purchasable-product')
                    .then((res)=>{
                        context.commit('purchasableList',res.data.data);
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    })
            })
        }, 
        getSimpleProduct: function(context,payload){
            return new Promise((resolve,reject) => {
                axios.get('admin/product/simple-product')
                    .then((res)=>{
                        context.commit('simpleList',res.data.data);
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    })
            })
        }, 
    },
    mutations: {
        lists: function (state, payload) {
            state.lists = payload
        },
        pagination: function (state, payload) {
            state.pagination = payload;
        },
        page: function (state, payload) {
            if (typeof payload !== "undefined" && payload !== null) {
                state.page = {
                    from: payload.from,
                    to: payload.to,
                    total: payload.total
                }
            }
        },
        show: function (state, payload) {
            state.show = payload;
        },
        temp: function (state, payload) {
            state.temp.temp_id = payload;
            state.temp.isEditing = true;
        },
        reset: function (state) {
            state.temp.temp_id = null;
            state.temp.isEditing = false;
        },
        getSku: function (state, payload) {
            state.getSku = payload;
        },
        purchasableList:function(state,payload) {
            state.purchasableList = payload;
        },
        simpleList:function(state,payload) {
            state.simpleList = payload;
        }
    },
}
