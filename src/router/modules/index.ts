// import { RouteRecordRaw } from 'vue-router'
import consoleArray from './console/index'
import authArray from './auth/index'

// export const modules = ['console']

// // import all route in subfolder
// // consoleRoutes: {
// //     './console/{name}.ts': module
// // }

// // console
// const consoleRoutes = import.meta.globEager('@/router/modules/console/*')
// export const consoleRoutesArray: RouteRecordRaw[] = Object.keys(consoleRoutes).map(index => {
//     const singleRoute = consoleRoutes[index]?.default
//     return singleRoute
// }).sort((a, b) => (a.meta.order > b.meta.order ? 1 : -1))

// // auth
// const authRoutes = import.meta.globEager('@/router/modules/auth/*')
// export const authRoutesArray: RouteRecordRaw[] = Object.keys(authRoutes).map(index => authRoutes[index]?.default)

export const consoleRoutesArray = consoleArray
export const authRoutesArray = authArray
