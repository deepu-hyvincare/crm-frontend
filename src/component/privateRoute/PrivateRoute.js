import React from 'react'
import { Redirect,Route } from 'react-router';
import { DefaultLayout } from '../../layout/DefaultLayout'
const isAuth = true;
export const PrivateRoute = ({children, ...rest}) => {
    return (
        <Route 
        {...rest}
            render={()=> isAuth ? <DefaultLayout>{children}</DefaultLayout>  : <Redirect to ='/'/>
            
            }       
            />
    )
}
