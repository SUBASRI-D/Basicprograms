arrsize=int(input("enter the lenght of the array"))
arr=[]
for  i in range(arrsize):
    val=int(input("enter value"))
    arr.append(val)
            
evenindex_val=[]
sum=0
for i in range(arrsize):
    if i%2==0:
        evenindex_val.append(arr[i])
for i in range(len(evenindex_val)):
    sum+=evenindex_val[i]
print(sum)
