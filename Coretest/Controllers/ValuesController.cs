using Microsoft.AspNetCore.Mvc;

namespace Coretest.Controllers
{

    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public string Get()
        {
            return "Hello from the controller";
        }
    }
}