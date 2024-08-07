import Head from 'next/head';
import React from 'react';

interface MetaHeadProps {
    title: string;
    description: string;
}

const MetaHead: React.FC<MetaHeadProps> = ({ title, description }) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Add more meta tags as needed */}
    </Head>
);

export default MetaHead;