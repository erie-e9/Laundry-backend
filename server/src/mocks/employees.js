import faker from 'faker';
import Employee from '../models/employees';

const TOTAL_EMPLOYEE = 10;

export default async () => {
    try {
        await Employee.remove();
        await Array.from({ length: TOTAL_EMPLOYEE}).forEach(
            async () => await Employee.create({
                            idbranchoffice: faker.commerce.price(),
                            eusername: faker.internet.userName(),
                            ephone: faker.phone.phoneNumberFormat(),
                            ecellphone: faker.phone.phoneNumberFormat(),
                            eemail: faker.internet.email(),
                            epassword: faker.internet.password(),
                            eturn: 'morning',
                            eavatar: faker.internet.avatar(),
                            efirstname: faker.name.firstName(),
                            elastname: faker.name.lastName(),
                            ebirthdate: faker.date.past(),
                            egender: 'male',
                            erol: 'administrator',
                            eactive: 'active',
                            efamref1: 'efamref1',
                            efamref2: 'efamref2',
                            eworkref1: 'eworkref1',
                            eworkref2: 'eworkref2',
                            eworkdate: faker.date.past(),
                            esalary: '1292.00',
                            ecurp: 'TOAE920427HDGRNR07',
                            erfc: 'TOAE920427974',
                            eimss: '31099207941',
                            etypecontract: 'cash',
                            ecountry: faker.address.country(),
                            estate: faker.address.state(),
                            ecity: faker.address.city(),
                            estreet: faker.address.streetName(),
                            ezip: 34000,
                            egeolocation: '24.214214,-107.321321', 
                        })
    )
    } catch (error) {
        throw error;
    }
}