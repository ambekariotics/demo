using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.DatabaseClass;
using WebApplication1.Models;
using WebApplication1.ViewModels;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DrillPointsController : ControllerBase
    {
        private static AppDBContext _dbContext;
        public DrillPointsController(AppDBContext appDBContext)
        {
            _dbContext = appDBContext;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_dbContext.PointsTable.ToList());
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var data = _dbContext.PointsTable.FirstOrDefault(x => x.Id == id);

            return Ok(data != null ? data : new { Error = "Data not found." });
        }

        [HttpPost]
        public IActionResult Post(PointsTableVM points)
        {
            var data = new PointsTable()
            {
                EndPoint = points.EndPoint,
                EventName = points.EventName,
                StartPoint = points.StartPoint
            };
            _dbContext.PointsTable.Add(data);
            _dbContext.SaveChanges();
            return Ok(new { Data = data, Message = "Drill points has been added" });
        }


        [HttpPut]
        public IActionResult Put(PointsTable points)
        {
            var data = _dbContext.PointsTable.FirstOrDefault(x => x.Id == points.Id);
            if (data != null)
            {
                data.StartPoint = points.StartPoint;
                data.EndPoint = points.EndPoint;
                data.EventName = points.EventName;
                _dbContext.PointsTable.Update(data);
                _dbContext.SaveChanges();
                return Ok(new { Data = data, Message = "Data update successfully" });
            }
            return Ok(new { Error = "Data not found" });
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var data = _dbContext.PointsTable.FirstOrDefault(x => x.Id == id);
            _dbContext.PointsTable.Remove(data);
            _dbContext.SaveChanges();
            return Ok(new { Message = "Drill Point record has been deleted." });
        }
    }
}
