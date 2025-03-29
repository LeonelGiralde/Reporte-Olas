const routes = {
    home: '/',
    login: '/login',
    crearReporte: '/crear-reporte',
    crearNovedad: '/crear-novedad',
    misReportes: '/mis-reportes',
    misNovedades: '/mis-novedades',
    reporteId: (id) => `/reporte/${id}`,
    novedadId: (id) => `/novedad/${id}`,
    reportes: '/reportes',
    novedades: '/novedades',
    usuarios: '/usuarios',
    account: '/account',
    register: '/register',
    notFound: '*'
};

export default routes;
