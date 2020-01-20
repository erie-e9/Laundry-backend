import faker from 'faker';
import Order from '../models/orders';

const TOTAL_ORDER = 10;

export default async () => {
    try {
        await Order.remove();
        await Array.from({ length: TOTAL_ORDER }).forEach(
            async () => await Order.create({
                            idclient: faker.commerce.price(),
                            idbranchoffice: faker.commerce.price(),
                            ototalprice: faker.commerce.price(),
                            odirectiondelivery: 'Address delivery street 4th...',
                            opaid: 'paid',
                            opaidform: 'credit_card',
                            ostatus: 'delivered',
                            odate: faker.date.past(),
                        })
        )
    } catch (error) {
        throw error;
    }
}