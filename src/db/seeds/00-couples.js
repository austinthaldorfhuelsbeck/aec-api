exports.seed = function (knex) {
  return knex("couples").insert([
    {
      url: "kailey-kyle",
      name: "Kailey + Kyle",
      image_url:
        "https://storage.googleapis.com/austin-and-emily-website/kailey-kyle_square.jpg",
      video_url: "https://player.vimeo.com/video/463281568",
    },
    {
      url: "miranda-jeremiah",
      name: "Miranda + Jeremiah",
      image_url:
        "https://storage.googleapis.com/austin-and-emily-website/miranda-jeremiah_square.jpg",
      video_url: "https://www.youtube.com/embed/0xws82uB54M",
    },
    {
      url: "michelle-dylan",
      name: "Michelle + Dylan",
      image_url:
        "https://storage.googleapis.com/austin-and-emily-website/michelle-dylan_square.jpg",
      video_url: "https://player.vimeo.com/video/499465875",
    },
    {
      url: "bianca-dylan",
      name: "Bianca + Dylan",
      image_url:
        "https://storage.googleapis.com/austin-and-emily-website/bianca-dylan_square2.jpg",
      video_url: "https://player.vimeo.com/video/499466128",
    },
    {
      url: "jessica-peter",
      name: "Jessica + Peter",
      image_url:
        "https://storage.googleapis.com/austin-and-emily-website/jessica-peter_square2.jpg",
      video_url: "https://player.vimeo.com/video/369754393",
    },
    {
      url: "cassandra-anthony",
      name: "Cassandra + Anthony",
      image_url:
        "https://storage.googleapis.com/austin-and-emily-website/cassandra-anthony_square2.jpg",
      video_url: "https://player.vimeo.com/video/519815327",
    },
    {
      url: "courtney-luke",
      name: "Courtney + Luke",
      image_url:
        "https://storage.googleapis.com/austin-and-emily-website/courtney-luke_square2.jpg",
      video_url: "https://player.vimeo.com/video/373184084",
    },
  ])
}
