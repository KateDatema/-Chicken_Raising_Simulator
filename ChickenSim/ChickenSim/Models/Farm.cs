using System;
using System.Collections.Generic;

#nullable disable

namespace ChickenSim.Models
{
    public partial class Farm
    {
        public Farm()
        {
            Chickens = new HashSet<Chicken>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? Seed { get; set; }

        public virtual ICollection<Chicken> Chickens { get; set; }
    }
}
