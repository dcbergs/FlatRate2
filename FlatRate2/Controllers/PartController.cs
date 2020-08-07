using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlatRate2.Data;
using FlatRate2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FlatRate2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PartController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PartController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Part>> GetParts()
        {
            return Ok(_context.Parts);
        }

        [HttpPost]
        public ActionResult PostPart(Part part)
        {
            _context.Parts.Add(part);
            _context.SaveChanges();
            return Ok();
        }

        [HttpGet("{name}")]
        public ActionResult<Part> FindPartByName(String name)
        {
            Part part = _context.FindPartByName(name);
            if(part != null)
            {
                return Ok(part);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
