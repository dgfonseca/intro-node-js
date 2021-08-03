const api = require('./users.js')
// write some tests
describe('users', () => {

    test('getUsers', (done)=>{
        api.findUser(1).then(data=>{
            expect(data.id).toEqual(1)
        }).catch(err=>{
            expect(err).toEqual(new Error(`No user with id `))
        });
        done()
    });

    test('deleteUsers',(done)=>{
        api.deleteUser("ASdASd").then(data=>{
            expect(data).toEqual({"id": 1})
        }).catch(err=>{
            console.log(err)
            expect(err).toEqual(new Error("No user with id ASdASd"))
        });
        done()
    })  
});

