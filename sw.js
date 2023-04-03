self.addEventListener('push',()=>{
    self.registration.sendNotification('test title message',{
    });
})