require 'diff/lcs'

begin
  text = []
  text_ok = ''
  text_ng = ''

  File.open('ok.txt') do |file|
    file.each_line do |line|
      text_ok << line.chomp
    end
  end
  File.open('ng.txt') do |file|
    file.each_line do |line|
      text_ng << line.chomp
    end
  end

  diffs = Diff::LCS.diff(text_ok, text_ng)
  diffs.each do |diff|
    diff.each do |line|
      puts line.to_a.to_s
      c = line.to_a[2]
      text << c if c != ' ' && c != '　' && c != '\t' && c != '	'
    end
  end
  puts '---------------------------------'
  puts text.uniq!.join('')

rescue SystemCallError => e
  puts %Q(class=[#{e.class}] message=[#{e.message}])
rescue IOError => e
  puts %Q(class=[#{e.class}] message=[#{e.message}])
end
