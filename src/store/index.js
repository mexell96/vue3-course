import { postModule } from "./postModule";
import { createStore } from "vuex";

export default createStore({
  modules: {
    post: postModule,
  },
});
