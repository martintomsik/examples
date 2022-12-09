# Downloads source from URLs.
for i in {1..28}
do
  content=$(curl -L www.internetmate.uk/sitemap.xml?page=$i)
  echo "$content" > "sitemap_$i.xml"
done
