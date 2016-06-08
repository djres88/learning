#EXERCISES 6 (strings)
def capitalize(str)
  str[0] = str[0].upcase
  str
end

puts capitalize("hello")

def shout_then_whisper(str1, str2)
  shout = str1.upcase + "!!! ... "
  whisper = str2.downcase
  shout + whisper
end

puts shout_then_whisper("go", "team")
