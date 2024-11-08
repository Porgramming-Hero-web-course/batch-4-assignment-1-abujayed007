// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

interface Profile {
    name: string;
    age: number;
    email: string;
}



function updateProfile(profile: Profile, updated: Partial<Profile>): Profile {
    return { ...profile, ...updated }
}

const myProfile: Profile = {
    name: 'Abu Jayed',
    age: 30,
    email: 'abujayed007@gmail.com'
}

const currentProfile: Profile = updateProfile(myProfile, { name: 'Shovon', age: 32, email: 'abujayed096@gmail.com' })
console.log(currentProfile);
