import { faker } from '@faker-js/faker'


class GENERATE_RANDOM_DATA {

        public static readonly  FIRSTNAME = faker.person.firstName()
        public static readonly  LASTNAME = faker.person.lastName()
        public static readonly  EMAILADDRESS = faker.internet.email()
        public static readonly  TELEPHONENUMBER = faker.phone.number()
        public static readonly  PASSWORD = faker.internet.password()

}


export { GENERATE_RANDOM_DATA }