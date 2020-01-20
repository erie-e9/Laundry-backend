import faker from 'faker';
import Analytic from '../models/analytics';

const TOTAL_ANALYTIC = 10;

export default async () => {
    try {
        await Analytic.remove();
        await Array.from({ length: TOTAL_ANALYTIC }).forEach(
            async () => await Analytic.create({
                            atext: faker.lorem.paragraphs(1)
                        })
        )
    } catch (error) {
        throw error;   
    }
}