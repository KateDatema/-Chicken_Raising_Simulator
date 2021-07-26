using System;
using System.Collections.Generic;

#nullable disable

namespace ChickenSim.Models
{
    public partial class Chicken
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? Age { get; set; }
        public int? Smarts { get; set; }
        public int? Strength { get; set; }
        public int? Speed { get; set; }
        public int? Luck { get; set; }
        public string Color { get; set; }
        public int? FarmId { get; set; }

        public virtual Farm Farm { get; set; }
    }
}
