import axios from "@/axios.js"
import axiosSuper from 'axios'
const CancelToken = axiosSuper.CancelToken
const source = CancelToken.source();
let cancel;

/**VARIABLES GLOBALES */
import {
    api_url
} from "../src/../VariablesGlobales"

export default {
    cancel: null,
    getUsuarios(param) {
        let self = this
        return new Promise((resolve, reject) => {
            axios.get(api_url + 'get_usuarios', {
                    cancelToken: new CancelToken((c) => {
                        self.cancel = c
                    }),
                    params: param
                })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    if (axiosSuper.isCancel(error)) {
                        reject(error.message)
                    } else {
                        reject(error)
                    }
                })
        })
    },
    getRoles() {
        let call = api_url + "get_roles"
        return new Promise((resolve, reject) => {
            axios.get(call)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    /**agregar rol */
    add_rol(param) {
        return new Promise((resolve, reject) => {
            axios.post(api_url + 'add_rol', param)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

    update_rol(param) {
        return new Promise((resolve, reject) => {
            axios.post(api_url + 'update_rol', param)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

    delete_rol(param) {
        return new Promise((resolve, reject) => {
            axios.post(api_url + 'delete_rol', param)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },


    /**obtener los modulos del sistema */
    getModulos() {
        let call = api_url + "get_modulos"
        return new Promise((resolve, reject) => {
            axios.get(call)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

    /**obtener los permisos por modulo y rol */
    getPermisosRol(param) {
        let call = api_url + "get_rol_permisos"
        let self = this
        return new Promise((resolve, reject) => {
            axios.get(call, {
                    cancelToken: new CancelToken((c) => {
                        self.cancel = c
                    }),
                    params: {
                        rol_id: param
                    }
                })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },


    /**obtener los datos de un usuario por id */
    get_usuarioById(param) {
        let call = api_url + "get_usuarioById"
        let self = this
        return new Promise((resolve, reject) => {
            axios.get(call, {
                    cancelToken: new CancelToken((c) => {
                        self.cancel = c
                    }),
                    params: {
                        user_id: param
                    }
                })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

    /**agregar usuario */
    add_usuario(param) {
        return new Promise((resolve, reject) => {
            axios.post(api_url + 'add_usuario', param)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

    /**modificar usuario */
    update_usuario(param) {
        return new Promise((resolve, reject) => {
            axios.post(api_url + 'update_usuario', param)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

    /**eliminar usuario */
    delete_usuario(param) {
        return new Promise((resolve, reject) => {
            axios.post(api_url + 'delete_usuario', param)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

    /**habilitar usuario */
    habilitar_usuario(param) {
        return new Promise((resolve, reject) => {
            axios.post(api_url + 'activate_usuario', param)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },



    /**obtener los permisos por modulo y rol */
    confirmPassword(param) {
        let call = api_url + "verificar_password"
        let self = this
        return new Promise((resolve, reject) => {
            axios.post(call, {
                    cancelToken: new CancelToken((c) => {
                        self.cancel = c
                    }),
                    params: {
                        password: param
                    }
                })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },


    /**obtengo el blob del pdf */
    get_pdf(service_end_point) {
        return new Promise((resolve, reject) => {
            axios.get(api_url + service_end_point, {
                    responseType: "blob"
                })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
}
