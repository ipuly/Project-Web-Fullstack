import HomePage from "@/pages/Home.vue"
import AddPage from "@/pages/Add.vue"
import UpdatePage from "@/pages/Update.vue"

export default [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/add",
        name: "add",
        component: AddPage,
    },
    {
        path: "/update/:id",
        name: "update",
        component: UpdatePage,
    },
]