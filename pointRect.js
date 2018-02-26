v1 = {x2-x1, y2-y1}   # Vector 1
v2 = {xA-x1, yA-y1}   # Vector 2
cross_product = v1.x*v2.y - v1.y*v2.x
if cross_product > 0:
print 'pointA is on the counter-clockwise side of line'
elif xp < 0:
print 'pointA is on the clockwise side of line'
else:
print 'pointA is exactly on the line'