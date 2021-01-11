 
import { StoreOptions } from 'vuex'
 
import {TodoItem} from "@/model/model"

const collection = "Activities";
interface UserData {
    todoItems: TodoItem
  }

const userData = {
    namespaced: true,
    state: () => ({
      todoItems: [
            {
                id: 1,
                name: "Learn Vue",
                hashtags: ['#Important', '#Coding', '#OverDue'],
                startTime: new Date(),
                endTime: null,
                dueDate: "2021-01-15T05:03:42.205Z",
                timeSpent: "",
                description: "Learn Vue on Boba Cafe",
                repeatable: 5
            },
            {
                id: 231,
                name: "Make Thai Tea",
                hashtags: ['#Important', '#Cooking', 'Boba'],
                startTime: new Date(),
                endTime: null,
                dueDate:  "",
                timeSpent: "",
                description: "It's tea time!",
                repeatable: 3
            },
            {
                id: 23,
                name: "Daily Github Commit",
                hashtags: ['#Important', '#Coding', '#OverDue'],
                startTime: new Date(),
                endTime: null,
                dueDate: "2021-01-15T05:03:42.205Z",
                timeSpent: "",
                description: "Gotta keep it green",
                repeatable: 1
            },
        ],

     
    }),
    getters: {
        todoItems(state: any) {
            return state.todoItems;
        },



    },

}


export default userData;