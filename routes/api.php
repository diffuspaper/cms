<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/**ruta para obtener tokens */
Route::post('oauth/token', '\Laravel\Passport\Http\Controllers\AccessTokenController@issueToken');


/**RUTAS PARA EL SISTEMA DE LOGUEADO*/
Route::middleware(['auth:api'])->group(function () {
    Route::post('logout_usuario', 'Usuarios\UsuariosController@logout_usuario');

    /**RUTA PARA OBTENER LOS PERMISOS DEL USUARIO */
    Route::get('get_permisos', 'Usuarios\UsuariosController@get_permisos');

    /**RUTA PARA OBTENER EL PERFIL DEL USUARIO */
    Route::get('get_perfil', 'Usuarios\UsuariosController@get_perfil');

    /**RUTA PARA OBTENER LOS DATOS DEL USUARIO */
    Route::get('get_usuarioById', 'Usuarios\UsuariosController@get_usuarioById');


    /**LAS RUTAS QUE ESTAN CONTROLADAS CON EL MIDDLEWARE "permiso" RECIBEN 2 PARAMETROS
     * EL PRIMERO ES EL NUMERO DEL MODULO
     * //4 permisos (1-Agregar, 2-Editar, 3-Eliminar y 4-Consultar)
     * EL SEGUNDO EL NUMERO DE PERMISO
     */
    Route::get('get_usuarios', 'Usuarios\UsuariosController@index');
    Route::post('add_usuario', 'Usuarios\UsuariosController@add_usuario')->middleware('permiso:1,1');
    Route::post('update_usuario', 'Usuarios\UsuariosController@update_usuario')->middleware('permiso:1,2');
    Route::post('delete_usuario', 'Usuarios\UsuariosController@delete_usuario')->middleware('permiso:1,3');
    Route::post('activate_usuario', 'Usuarios\UsuariosController@activate_usuario')->middleware('permiso:1,3');
    Route::get('pdfs', 'Usuarios\UsuariosController@pdfs')->middleware('permiso:1,4');

    /**verificar el password del usuario recibe el request del token y el password */
    Route::post('verificar_password', 'Usuarios\UsuariosController@verificar_password');


    /**RUTAS PARA ROLES */
    Route::get('get_roles', 'Usuarios\RolesController@index');
    Route::get('get_modulos', 'Usuarios\RolesController@get_modulos');
    Route::get('get_rol_permisos', 'Usuarios\RolesController@get_rol_permisos');
    Route::post('add_rol', 'Usuarios\RolesController@add_rol')->middleware('permiso:1,1');
    Route::post('update_rol', 'Usuarios\RolesController@update_rol')->middleware('permiso:1,2');
    Route::post('delete_rol', 'Usuarios\RolesController@delete_rol')->middleware('permiso:1,3');
});






//RUTA DEL LOGUIN
Route::post('login_usuario', 'Usuarios\UsuariosController@login_usuario');
//RUTA DEL REFRESH TOKEN
Route::post('refresh_token', 'Usuarios\UsuariosController@refresh_token');

//RECUPERAR CONTRASEÑA
Route::post('/password/email', 'Auth\Api\ForgotPasswordController@sendResetLinkEmail');
Route::post('/password/reset', 'Auth\Api\ResetPasswordController@reset');






//Route::resource('usuarios', 'UsuariosController',['only'=>['index']]);


/**FIN DE RUTAS DEL SISTEMA DE LOGUEADO */