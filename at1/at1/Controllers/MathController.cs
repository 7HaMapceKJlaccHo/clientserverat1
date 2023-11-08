using Microsoft.AspNetCore.Mvc;

namespace at1.Controllers
{
    public class MathRequest
    {
        public int Number1 { get; set; }
        public int Number2 { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class MathController : ControllerBase
    {
        [HttpPut("add")]
        public IActionResult Add(MathRequest request)
        {
            return Ok($"Success: {request.Number1 + request.Number2}");
        }

        [HttpPut("subtract")]
        public IActionResult Subtract(MathRequest request)
        {
            return Ok($"Success: {request.Number1 - request.Number2}");
        }

        [HttpPut("multiply")]
        public IActionResult Multiply(MathRequest request)
        {
            return Ok($"Success: {request.Number1 * request.Number2}");
        }

        [HttpPut("divide")]
        public IActionResult Divide(MathRequest request)
        {
            if (request.Number2 == 0)
            {
                return BadRequest("Fail: Nu se poate de impartit la 0");
            }

            return Ok($"Success: {request.Number1 / request.Number2}");
        }

        [HttpPut("Pow")]
        public IActionResult Pow(MathRequest request)
        {
            return Ok($"Success: {Math.Pow(request.Number1, request.Number2)}");
        }
    }
}
