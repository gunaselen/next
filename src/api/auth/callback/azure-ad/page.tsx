'use client';
import Head from 'next/head'
import React from 'react'
import axios from 'axios'
import qs from 'qs'
import { useSearchParams } from 'next/navigation'



export default function page() {

    const searchParams = useSearchParams()
 
    const code = searchParams?.get('code')

    let data = qs.stringify({
        'client_id': '7bfae016-55fd-4757-9d6f-c185eb591a1e',
        'scope': 'https://graph.microsoft.com/mail.read',
        'grant_type': 'authorization_code',
        'client_secret': 'Gmk8Q~6rFElEuQC-VhJEtqyzK0brf8vAN-.PkdtS',
        'code': 'M.C107_BAY.2.5405e90f-377f-bf38-49ad-4d4f44068e09' 
      });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': 'buid=0.AScCDQSIkWdsW0yxEjajBLZtrXbeMWemFK5Jl7xuumkUOR4zAAA.AQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-jbXUu2JpsrhiGjs_dbthwpoupwoxJhg8GvCfUIA3HiscG9HRkvbK6s_pasMehhEcElFjBta67EVnwus6VwtU81im7-L2bI7R4ktdwZYoRKIgAA; esctx=PAQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-9GgrCDoFPAjzXvce5hsEn776IRhz6nrf-jBL4SgTkb00bgyvS8hmh-BfhlHjCoqo3JUooC53PYzcST6h2_0QlLnrd2-_Zaa2H0QzuueRDn7TWX08SnXP6JZO8DtHLy20W4F-LGDSiY61SddeQrKrVulR4sQVLxBdU3BGfdLo8B8gAA; esctx-bTrAoXlckCg=AQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-bqzKY_iL6f-7t-CBTusTaC_-GMCxFPy7C1TqA3eBYGLebRSFbyTKIKF9HZqEcERbDpqTqJxfDeakO4xD5azQc-IAWRVexRtv_dJl_4s7aOvlFM48w7oe0sYfv0dFvFhMPGajij8eTZl7eMgXjin3kSAA; fpc=AqXCOPp6O_hImEHNlYcdgCnbUW7vAQAAAMnKQt0OAAAAHt_GDQIAAADGy0LdDgAAAIL4xWQEAAAA_ctC3Q4AAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd'
        },
        data: data
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });




    return (
        <div>

            <div className="tabelSection">
                <div className="tabelSection-card bg-color ">
                </div>
            </div>
            <div className="chartSection">

                {/* chartSection  */}

            </div>
        </div>


    )
}
