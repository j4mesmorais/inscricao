function tempo(request, response) {
  const dynamicDate = new Date();
  response.json({dynamicDate.toGMTString()})
} 

export default tempo;