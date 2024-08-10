stringarr=input("enter a string")
count=0
for i in range(len(stringarr)):
    if(stringarr[i].isupper()):
        count+=1
print(count)