def time_conversion(mins)
  minutes = mins % 60
  hours = mins/60 #floor method?
  if hours < 10
    hours = "0" + hours.to_s
  end
  if minutes < 10
    minutes = "0" + minutes.to_s
  end
  hours.to_s + ":" + minutes.to_s
end

# Test - these should all print true!
puts "\nTime Conversion:\n" + "*" * 15 + "\n"
puts time_conversion(30) == "00:30"
puts time_conversion(60) == "01:00"
puts time_conversion(90) == "01:30"
puts time_conversion(120) == "02:00"
puts time_conversion(10) == "00:10"
puts time_conversion(5) == "00:05"
puts time_conversion(0) == "00:00"

puts time_conversion(30)
puts time_conversion(60)
puts time_conversion(90)
puts time_conversion(120)
puts time_conversion(10)
puts time_conversion(5)
puts time_conversion(0)
