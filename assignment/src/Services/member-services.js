
async function getMembers(){
    const response =
      await fetch( "http://localhost:3004/posts",
        { 
          method: 'get',
          headers: {'Content-Type':'application/json','Accept': 'application/json'},
        }
      )
    return await response;
  }
  export {getMembers}