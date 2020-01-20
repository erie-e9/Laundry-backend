import faker from 'faker';
import Service from '../models/services';

const TOTAL_SERVICE = 10;

export default async () => {
    try {
        await Service.remove();
        await Array.from({ length: TOTAL_SERVICE }).forEach(
            async () => await Service.create({
                            sidgarment: TOTAL_SERVICE + 1,
                            sidservice: TOTAL_SERVICE + 1,
                            sname: 'Iron clothes',
                            sgarmentnameunity: 'T-shirt',
                            scost: faker.commerce.price(),
                            sdiscount: '.10',
                        })
        )
    } catch (error) {
        throw error;
    }
}