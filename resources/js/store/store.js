import axios from "axios";

export default{
    state: {
        categoryData: [],
      },
      getters: {
        categories(state){
            return state.categoryData;
        }
      },
      actions:{
        getCategory(data){
            axios.get('/get-category').then((response)=>{
                data.commit('category_mutations',response.data.categories)
            }).catch(()=>{

            })
        }
      },
      mutations: {
        category_mutations(state,ResonseData){
            return state.categoryData=ResonseData;
        }
      }
}
