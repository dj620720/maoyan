export default {
  path: "/movie",
  component: () => import("@/views/movie"),
  children: [
    { path: "city", component: () => import("@/components/city") },
    { path: "now", component: () => import("@/components/now") },
    { path: "next", component: () => import("@/components/next") },
    { path: "search", component: () => import("@/components/search") },
    {
        path:"detail/1/:movieId",
        components:{
            detail:()=>import('@/views/movie/detail')
        },
        props:{
            detail:true
        }
    },
    {
        path:"detail/2/:movieId",
        components:{
            detail:()=>import('@/views/movie/detail')
        },
        props:{
            detail:true
        }
    },
    { path: "/movie", redirect: "/movie/now" },
  ]
};
