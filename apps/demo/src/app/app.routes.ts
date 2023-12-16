import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        children: [
          {
            path: 'lib01',
            loadChildren: () => import('@lib-overload/lib01').then((mod) => mod.LibOverloadLib01Module)
          },
          {
            path: 'lib02',
            loadChildren: () => import('@lib-overload/lib02').then((mod) => mod.LibOverloadLib02Module)
          },
          {
            path: 'lib03',
            loadChildren: () => import('@lib-overload/lib03').then((mod) => mod.LibOverloadLib03Module)
          },
          {
            path: 'lib04',
            loadChildren: () => import('@lib-overload/lib04').then((mod) => mod.LibOverloadLib04Module)
          },
          {
            path: 'lib05',
            loadChildren: () => import('@lib-overload/lib05').then((mod) => mod.LibOverloadLib05Module)
          },
          {
            path: 'lib06',
            loadChildren: () => import('@lib-overload/lib06').then((mod) => mod.LibOverloadLib06Module)
          },
          {
            path: 'lib07',
            loadChildren: () => import('@lib-overload/lib07').then((mod) => mod.LibOverloadLib07Module)
          },
          {
            path: 'lib08',
            loadChildren: () => import('@lib-overload/lib08').then((mod) => mod.LibOverloadLib08Module)
          },
          {
            path: 'lib09',
            loadChildren: () => import('@lib-overload/lib09').then((mod) => mod.LibOverloadLib09Module)
          },
          {
            path: 'lib10',
            loadChildren: () => import('@lib-overload/lib10').then((mod) => mod.LibOverloadLib10Module)
          },
          {
            path: 'lib11',
            loadChildren: () => import('@lib-overload/lib11').then((mod) => mod.LibOverloadLib11Module)
          },
          {
            path: 'lib12',
            loadChildren: () => import('@lib-overload/lib12').then((mod) => mod.LibOverloadLib12Module)
          },
          {
            path: 'lib13',
            loadChildren: () => import('@lib-overload/lib13').then((mod) => mod.LibOverloadLib13Module)
          },
          {
            path: 'lib14',
            loadChildren: () => import('@lib-overload/lib14').then((mod) => mod.LibOverloadLib14Module)
          },
          {
            path: 'lib15',
            loadChildren: () => import('@lib-overload/lib15').then((mod) => mod.LibOverloadLib15Module)
          },
          {
            path: 'lib16',
            loadChildren: () => import('@lib-overload/lib16').then((mod) => mod.LibOverloadLib16Module)
          },
          {
            path: 'lib17',
            loadChildren: () => import('@lib-overload/lib17').then((mod) => mod.LibOverloadLib17Module)
          },
          {
            path: 'lib18',
            loadChildren: () => import('@lib-overload/lib18').then((mod) => mod.LibOverloadLib18Module)
          },
          {
            path: 'lib19',
            loadChildren: () => import('@lib-overload/lib19').then((mod) => mod.LibOverloadLib19Module)
          },
          {
            path: 'lib20',
            loadChildren: () => import('@lib-overload/lib20').then((mod) => mod.LibOverloadLib20Module)
          }
        ]
      },
];
