const state={
     nm:"重庆",
     id:45
};

const actions={

};

const mutations={
     CITY_INFO(state,payload){
          state.nm=payload.nm,
          state.id=payload.id
     }
};

export default {
     namespaced: true,
     state,
     actions,
     mutations
}