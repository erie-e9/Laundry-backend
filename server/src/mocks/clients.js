import faker from 'faker';
import Client from '../models/clients';

const TOTAL_CLIENT = 10;

export default async () => {
    try {
        await Client.remove()
        await Array.from({ length: TOTAL_CLIENT }).forEach(
            async () => await Client.create({
                            cusername: faker.internet.userName(),
                            cphone: faker.phone.phoneNumberFormat(),
                            ccellphone: faker.phone.phoneNumberFormat(),
                            cemail: faker.internet.email(),
                            cpassword: faker.internet.password(),
                            cavatar: faker.internet.avatar(),
                            cfirstname: faker.name.firstName(),
                            clastname: faker.name.lastName(),
                            cbirthdate: faker.date.past(),
                            cgender: 'male',
                            clastpurchase:  faker.date.past(),
                            ccountry: faker.address.country(),
                            cstate: faker.address.state(),
                            ccity: faker.address.city(),
                            cstreet: faker.address.streetName(),
                            czip: 34000,
                            cgeolocation: '24.214214,-107.321321',
                            cemailverified: 'verified',
                            cactive: 'active',
                            cverificationcode: 'verified',
                        })
        )
    } catch (error) {
        throw error;
    }
}
