using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Models
{
    [Table("PointsTable")]
    public class PointsTable
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage ="Start point is required.")]
        public int StartPoint { get; set; }
        [Required(ErrorMessage = "End point is required.")]
        public int EndPoint { get; set; }
        [Required(ErrorMessage = "Event name is required.")]
        public string EventName { get; set; }
    }
}
