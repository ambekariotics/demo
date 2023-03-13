using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.ViewModels
{
    public class PointsTableVM
    {
        [Required(ErrorMessage ="Start point is required.")]
        public int StartPoint { get; set; }
        [Required(ErrorMessage = "End point is required.")]
        public int EndPoint { get; set; }
        [Required(ErrorMessage = "Event name is required.")]
        public string EventName { get; set; }
    }
}
