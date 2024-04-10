import React from 'react';
import "./benefits.css"
import BenefitsItem from '../BenefitsItem';

const benefits = [
    {
        title: 'Delivery',
        text: 'Benefit from prompt and reliable delivery services. Your satisfaction is our priority.',
    },
    {
        title: 'Products',
        text: 'Find inspiration in our diverse range of high-quality products. Whether you seek everyday essentials or glamorous must-haves, we cater to your needs.',
    },
    {
        title: 'Payments',
        text: 'Experience seamless transactions with our secure payment methods. Your convenience and peace of mind are our top priorities.',
    },
];

const Benefits = () => (
    <div className="benefits">
        {benefits.map(item => (
            <BenefitsItem key={item.title} item={item} />
        ))}
    </div>
);

export default Benefits;
