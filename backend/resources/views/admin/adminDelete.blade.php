<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Admin Delete</title>
		<link rel="stylesheet" href="{{asset('css/adminstyle.css')}}">
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
	    <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,400,500,600" rel="stylesheet" type="text/css">
	</head>
	<body>

		<!--wrapper start-->
		<div class="wrapper">
		@include ('admin.sidebar')

			<!--main container start-->
			<div class="main-container">

				<center>
					<h1>Admin delete</h1>
				</center>

				<form method="post">
		            @csrf
				
                    <table id = "table" border="1">

                        <tr>
                            <td>Id</td>
                            <td>{{$admin->id}}</td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td>{{$admin->username}}</td>
                        </tr>
                        <tr>
                            <td>First Name</td>
                            <td>{{$admin->firstname}}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{{$admin->lastname}}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{{$admin->gender}}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{{$admin->email}}</td>
                        </tr>

                    </table>
                    <br>

                    <center>
                        <h3> Are you sure to delete?</h3>
                        <input type="submit" name="submit" value="Confirm">
                    </center>

                </form>
				
			</div>
			<!--main container end-->
		</div>
		<!--wrapper end-->

		<style>
			body{
				color: white;
				background-color:rgb(114, 155, 172);
			}


		</style>

	</body>
</html>
