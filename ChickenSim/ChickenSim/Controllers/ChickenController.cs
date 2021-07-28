using ChickenSim.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChickenSim.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChickenController : ControllerBase
    {
        ChickenSimContext db = new ChickenSimContext();

        public List<Chicken> GetChickens()
        {
            return db.Chickens.ToList();
        }

        [HttpGet]
        [Route("{id}")]
        public Chicken GetChicken(int id)
        {
            Chicken c = db.Chickens.Find(id);
            return c;
        }

        [HttpGet]
        [Route("GetByFarm/{id}")]
        public List<Chicken> GetChickenByFarm(int farmId)
        {
            List<Chicken> output = db.Chickens.Where(x => x.FarmId == farmId).ToList();
            return output;
        }

        [Route("Farms")]
        public List<Farm> GetFarms()
        {
            return db.Farms.ToList();
        }

        [Route("Farms/{farmId}")]
        public Farm GetFarm(int farmId)
        {
            Farm f = db.Farms.Find(farmId);
            return f;
        }

        [HttpPost]
        [Route("AddChicken/n={name}&f={farmId}")]
        public void AddChicken(string name, int farmId)
        {
            Chicken c = new Chicken();
            Random rng = new Random();

            c.Name = name;
            c.Age = 1;
            c.FarmId = farmId;

            c.Smarts = rng.Next(1, 11);
            c.Strength = rng.Next(1, 11);
            c.Speed = rng.Next(1, 11);
            c.Luck = rng.Next(1, 11);

            string[] colors = { "red", "grey", "white", "Black" };
            int pick = rng.Next(0, colors.Length);
            c.Color = colors[pick];

            db.Chickens.Add(c);
            db.SaveChanges();
        }

        [HttpPost("AddFarm/n={name}")]
        public void AddFarm(string name)
        {
            Farm f = new Farm();
            f.Name = name;
            f.Seed = 100;

            db.Farms.Add(f);
            db.SaveChanges();
        }

        [HttpPut("ChangeSeed/farmId={id}&a={amount}")]
        public void ChangeSeeds(int id, int amount)
        {
            //find the farm
            Farm f = db.Farms.Find(id);


            //increase its seeds
            f.Seed += amount;

            //store and save the updated changes
            db.Farms.Update(f);
            db.SaveChanges();
        }

        [HttpPut("StatsUp/f={farmId}&c={chickenId}")]
        public void IncreaseStats(int farmId, int chickenId)
        {
            //find both farm and the Chicken
            Chicken c = db.Chickens.Find(chickenId);
            Farm f = db.Farms.Find(farmId);

            if (f.Id == c.FarmId)
            {
                f.Seed--;
                db.Farms.Update(f);

                c.Age++;
                c.Smarts++;
                c.Speed++;
                c.Strength++;
                c.Luck++;
                db.Chickens.Update(c);

                db.SaveChanges();
            }
        }

    }
}
