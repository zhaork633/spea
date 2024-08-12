import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {router} from "@/router";
import '@/i18n';
import 'mac-scrollbar/dist/mac-scrollbar.css';
import './main.css';

const rootEl = document.getElementById('root');
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>,
    );
}
