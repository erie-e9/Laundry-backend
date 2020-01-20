import faker from 'faker';
import Branchoffice from '../models/branchoffices';
import constants from '../config/constants';

const TOTAL_BO = 10;
const COMPANY_NAME = constants.COMPANY_NAME;

export default async () => {
    try {
        await Branchoffice.remove();
        await Array.from({ length: TOTAL_BO }).forEach(
            async () => await Branchoffice.create({
                            bothumbnail: faker.image.business(),
                            boname: faker.company.companyName(),
                            boemail: faker.internet.email(),
                            bophone: faker.phone.phoneNumberFormat(),
                            bocellphone: faker.phone.phoneNumberFormat(),
                            boworkhours: '8am - 4pm',
                            boactive: 'active',
                            bogeolocation: '24.214214,-107.321321',
                            boaddress: 'Branch Office address street 4th...',
                            bocountry: faker.address.country(),
                            bostate: faker.address.state(),
                            bocity: faker.address.city(),
                            bostreet: faker.address.streetName(),
                            bozip: 34000,
                            bourl: `https://www.${COMPANY_NAME}.com`,
                            bofacebook: `https://www.facebook.com/${COMPANY_NAME}`,
                            botwitter: `https://www.twitter.com/${COMPANY_NAME}`,
                            boinstagram: `https://www.instagram.com/${COMPANY_NAME}`,
                    })
    )
    } catch (error) {
        throw error;
    }
}